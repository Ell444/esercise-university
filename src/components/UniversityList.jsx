
export default ({ universityInfo }) => {

    return (
        universityInfo.map((obj, i) => {
            const { name, url } = obj;
            return <a key={`url${i}`} href={url}> <span>{name}</span> </a>

        }));
}