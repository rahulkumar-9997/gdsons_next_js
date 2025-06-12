import Api from './Api';

export default async function ApiWrapper({ slug }) {
  const apiPath = slug.join('/');
  const apiUrl = `https://www.gdsons.co.in/api/catalog/${apiPath}`;
  const response = await fetch(apiUrl);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error('API returned unsuccessful response');
  }

  return <Api data={result.data} />;
}