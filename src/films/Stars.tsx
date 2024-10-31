import Star from "./Star";

interface StarsProps {
    count: number;
}

function Stars({ count = 0 }: StarsProps) {
    if (!Number.isInteger(count) || count < 1 || count > 5) {
        return (<></>);
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {Array.from({ length: count }, ((_, i) => i + 1)).map((i) => (
                <li key={i}>
                    <Star />
                </li>
            ))}
        </ul>
    );
}

export default Stars;
