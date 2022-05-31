const Alert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type ? type : 'danger'}`}>{message}</div>
  );
};

export default Alert;
