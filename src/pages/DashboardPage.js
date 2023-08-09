import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { auth } from '../utils/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { onAuthStateChanged } from "firebase/auth";

function DashboardPage() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (!user) {
            navigate('/login');
        }
        });
    });


    return (
        

        
        <>
            <>
            <section className="container-big w-full flex items-center gap-y-8 md:gap-0">
                <div className="flex flex-col gap-y-8 px-8 text-center sm:text-left">
                    {user === null && (
                    <h1>Login dulu bos</h1>  
                    )}
                    {!(user === null) && (
                        <ul className="list-none mt-10">
                            <li className="text-primary-blue/100 hover:text-primary-blue/25">
                                <Link to="/dashboard/berita">
                                    Atur Berita
                                </Link>
                            </li>
                            <li className="text-primary-blue/100 hover:text-primary-blue/25">
                                <Link to="/dashboard/lesson">
                                    Atur Lesson
                                </Link>
                            </li>
                            <li className="text-primary-blue/100 hover:text-primary-blue/25">
                                <Link to="/dashboard/upload">
                                    Upload File
                                </Link>
                            </li>
                        </ul>
                    )}
                    
                </div>
            </section>
            </>
            <>
                {/* <Routes>
                    <Route path="/dashboard/berita" element={<DashboardNewsPage />}/>
                </Routes> */}
            </>
        

        {/* ke halaman daftar berita (item berita dapat dihapus) */}
            

        {/* ke halaman daftar materi (item materi dapat dihapus) */}
        
        </>
        
    );
}

export default DashboardPage;