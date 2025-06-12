import Api from './Api';
import { redirect } from 'next/navigation';

export default async function ApiWrapper({ slug, searchParams }) {
  const apiPath = slug.join('/');
  
  // Build query parameters from searchParams
  const queryParams = new URLSearchParams();
  const hasFilters = Object.keys(searchParams).some(
    key => key !== 'sort' && key !== 'page' && key !== 'filter'
  );
  
  if (hasFilters) {
    queryParams.set('filter', '1');
  }
  
  // Handle filters
  // if (searchParams.filter) {
  //   queryParams.set('filter', searchParams.filter);
  // }
  
  // Handle other filter attributes
 Object.keys(searchParams).forEach(key => {
    if (key !== 'sort' && key !== 'page' && key !== 'filter') {
      queryParams.set(key, searchParams[key]);
    }
  });
  
  if (searchParams.sort) {
    queryParams.set('sort', searchParams.sort);
  }
  
  // Handle pagination
  if (searchParams.page) {
    queryParams.set('page', searchParams.page);
  }
  
  const apiUrl = `https://www.gdsons.co.in/api/catalog/${apiPath}?${queryParams.toString()}`;
  const response = await fetch(apiUrl);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error('API returned unsuccessful response');
  }

  return <Api data={result.data} searchParams={searchParams} />;
}