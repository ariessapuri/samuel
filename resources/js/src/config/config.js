let baseAPIURL = '';

if (process.env.NODE_ENV === 'development') {
  baseAPIURL = 'http://localhost:8000/api/';
} else {
  baseAPIURL = 'https://api.example.com/';
}

export default {
  baseAPIURL: baseAPIURL
};
