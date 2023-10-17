import {useParams} from 'react-router-dom';

export default function TableDetail() {
    const{ tableName } = useParams();
    return(
        <div>
            Table Detail Name: {tableName}
        </div>
    );
}