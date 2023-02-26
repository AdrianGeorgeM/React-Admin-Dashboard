import { useRecordContext } from 'react-admin';
import { Link } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

type MyUrlFieldProps = {
	source: any;
};

const MyUrlField = ({ source }: MyUrlFieldProps) => {
	const record = useRecordContext();
	return record ? (
		<Link href={record[source]} sx={{ textDecoration: 'none' }}>
			{record[source]}
			<LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
		</Link>
	) : null;
};

export default MyUrlField;
