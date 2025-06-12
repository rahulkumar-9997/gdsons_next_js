import ApiWrapper from './ApiWrapper';

export default async function Page({ params, searchParams }) {
    const { slug } = await params;
    //const { searchParameter } = await searchParams;
    
    return (
        <>
            <ApiWrapper slug={slug} searchParams={searchParams} />
        </>
    );
}

// import ApiWrapper from './ApiWrapper';
// export default async function Page({ params }) {
//     const { slug } =  await params;
    
//     return (
//         <>
//             <ApiWrapper slug={slug} />
//         </>
//     );
// }