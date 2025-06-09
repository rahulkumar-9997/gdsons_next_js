// Server Component – NO 'use client'
import Header from './Header';

async function getMenuData() {
  try {
    const res = await fetch('https://www.gdsons.co.in/api/menu', {
      cache: 'no-store',
      headers: {
         'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch menu. Status: ${res.status}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Menu fetch error:', error);
    return [];
  }
}

export default async function HeaderWrapper() {
  const menuData = await getMenuData();
  return <Header initialCategories={menuData} />;
}
