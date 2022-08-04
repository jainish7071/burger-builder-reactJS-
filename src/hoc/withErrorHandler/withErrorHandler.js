import React, { useEffect, useState } from "react";
import Modal from "../../Components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  // i am using react.memo in change of componentShouldUpdate
  return React.memo((props) => {
    const [error, setError] = useState(null);
    // if using classed based we can use componentDidUpdate for this
    useEffect(() => {
      const resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => setError(error)
      );
      const reqInterceptor = axios.interceptors.request.use((req) => {
        setError(null);
        return req;
      });

      // for cleanup - we can use componentWillUnmount in classed based component
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, []);
    const errorConfirmedHandler = () => {
      setError(null);
    };
    return (
      <>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  });
};

export default withErrorHandler;
