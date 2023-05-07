import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';
import useTitle from '../../../useHooks/useTitle';

const ManageDoctors = () => {
    useTitle('ManagesDoc');
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () =>{
        setDeletingDoctor(null);
    }


    const {data: doctors, isLoading, refetch} = useQuery({
        queryKey: [],
        queryFn: async() =>{
            try{
                const res = fetch('https://doctors-portal-server-ashy-xi.vercel.app/doctors',{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch{

            }
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    const handleDoctorDelete = doctor =>{
        fetch(`https://doctors-portal-server-ashy-xi.vercel.app/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success(`Dr ${doctor.name} deleted Successfully`)
                refetch();
            }
        })
    } 
    return (
        <div>
            <h2 className='text-3xl'>Doctors Lists: {doctors?.length} </h2>
            <div className="overflow-x-auto mb-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        doctors?.map((doctor, i) => 
                            <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                title={`Are you sure that, you want to delete?`}
                message={`If you delete ${deletingDoctor.name}.It can not be recover.`}
                successAction={handleDoctorDelete}
                successButtonName = 'Delete'
                modalData={deletingDoctor}
                closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;