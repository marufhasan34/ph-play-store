import { FadeLoader } from 'react-spinners';
import UseApps from '../../Hooks/UseApps';
import { useParams } from 'react-router';
import AppDetailsCard from './AppDetailsCard';

const AppDetails = () => {
    const {id} = useParams()
     const { apps, loading } = UseApps();
     const expectedApp = apps.find(app => String(app.id) ===id);
     if(loading){
        return(
            <div className="flex h-[60vh] justify-center items-center">
          {" "}
          <FadeLoader color="#ad46ff" />
        </div>
        )
     }
    return (
        <div className='container mx-auto'>
          <AppDetailsCard expectedApp={expectedApp} />
        </div>
    );
};

export default AppDetails;