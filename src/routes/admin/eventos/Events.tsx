import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';
import { DataGrid } from '@mui/x-data-grid';

import firebase from '~/firebase';

// import './App.css'

const EVENT_COLUMNS = [{
  field: 'name',
  headerName: 'Nombre',
  width: 150,
  sortable: true,
}];
const Events = () => {
  const [events, loading, error] = useCollectionData(
    collection(getFirestore(firebase), 'events'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log({ events, loading, error });

  if (loading && !events) {
    return 'Loading';
  }

  if (events) {
    return (
      <DataGrid
        columns={EVENT_COLUMNS}
        rows={events}
        loading={loading}
        getRowId={item => item.name}
      />
    );
  }

  return '';
};

export default Events;
