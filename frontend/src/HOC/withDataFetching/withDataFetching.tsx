import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ReactComponent as Loader } from 'assets/loader.svg';
import { StyledLoader } from './withDataFetching.style';

const withDataFetching = <P extends object>(
  fetchFunction: (props: P) => any,
  shouldCallEffect: (props: P) => any[],
  successFunction: (props: P, data: any) => void,
) => (BaseComponent: React.ComponentType<P>) => (props: P) => {
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  const cleanup = () => {
    setLoading(true);
    setApiError(false);
  };

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const dataDict = await fetchFunction(props);
          const dataList = JSON.parse(dataDict.text);
          successFunction(props, dataList);
          setLoading(false);
        } catch (error) {
          setApiError(true);
        }
      };
      fetchData();

      return cleanup;
    },
    [...shouldCallEffect(props)],
  );

  return (
    <React.Fragment>
      {loading ? (
        <StyledLoader>
          <Loader />
        </StyledLoader>
      ) : apiError ? (
        <FormattedMessage id="home.api-error-message" />
      ) : (
        <BaseComponent {...props} />
      )}
    </React.Fragment>
  );
};

export default withDataFetching;
