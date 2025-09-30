const useDate = ({ settings }) => {
  const { chirp_app_date_format } = settings;

  const dateFormat = chirp_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
