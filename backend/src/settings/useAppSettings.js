const useAppSettings = () => {
  let settings = {};
  settings['chirp_app_email'] = 'noreply@chirpapp.com';
  settings['chirp_base_url'] = 'https://poliglots.github.io';
  return settings;
};

module.exports = useAppSettings;
