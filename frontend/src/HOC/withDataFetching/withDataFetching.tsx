import React, { useEffect, useState } from 'react';

import { FormattedMessage } from 'react-intl';
import { ReactComponent as Loader } from '../../assets/loader.svg';
import { StyledLoader } from './withDataFetching.style';

const withDataFetching = <P extends object>(
  dataName: string,
  fetchFunction: (props: P) => any,
  shouldCallEffect: (props: P) => any[],
) => (BaseComponent: React.ComponentType<P>) => (props: P) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const dataDict = await fetchFunction(props);
          const dataList = JSON.parse(dataDict.text);
          setData(dataList);
          setLoading(false);
        } catch (error) {
          setApiError(true);
        }
      };
      fetchData();

      return function cleanup() {
        setData(null);
        setLoading(true);
        setApiError(false);
      };
    },
    [...shouldCallEffect(props)],
  );

  const customProps = {
    [dataName]: data,
  };

  return (
    <React.Fragment>
      {loading ? (
        <StyledLoader>
          <Loader />
        </StyledLoader>
      ) : apiError ? (
        <FormattedMessage id="home.api-error-message" />
      ) : (
        data && <BaseComponent {...props} {...customProps} />
      )}
    </React.Fragment>
  );
};

export default withDataFetching;
