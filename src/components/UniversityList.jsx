export default ({ objArray }) => {
    return objArray.map((obj, i) => {
        const { name, url } = obj;
        return (
            <div key={`url${i}`}>
                <a href={url}>{name}</a>
            </div>
        );
    });
};
