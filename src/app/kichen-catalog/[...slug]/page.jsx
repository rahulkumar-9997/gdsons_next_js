import ApiWrapper from './ApiWrapper';
export default async function Page({ params }) {
    const { slug } =  await params;
    
    return (
        <>
            <ApiWrapper slug={slug} />
        </>
    );
}