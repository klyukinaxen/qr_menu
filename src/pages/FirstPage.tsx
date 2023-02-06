import React from 'react';
import { useNavigate } from 'react-router-dom'

export const FirstPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="container first-page">
            {/* <h1>hello</h1> */}
            <picture className='first-page__image'>
                <img className='first-page__image' alt="" src="https://2.downloader.disk.yandex.ru/preview/7a3a4b8a1ccf364b8a3031aac0aefbad6a5c30cc22636eb8d3094b862a05617c/inf/Uj0A_t6X47rqE5ags1EFMh1DOpZfLRxD-FvzmT_cg_boQNpxAJMVoM73bSVof04CHm4jh13m_1fpuSibBYCW2w%3D%3D?uid=1099682977&filename=logo-main.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1099682977&tknv=v2&size=2880x1422" />
            </picture>
            {/* <img className='first-page__image' src="https://2.downloader.disk.yandex.ru/preview/7a3a4b8a1ccf364b8a3031aac0aefbad6a5c30cc22636eb8d3094b862a05617c/inf/Uj0A_t6X47rqE5ags1EFMh1DOpZfLRxD-FvzmT_cg_boQNpxAJMVoM73bSVof04CHm4jh13m_1fpuSibBYCW2w%3D%3D?uid=1099682977&filename=logo-main.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1099682977&tknv=v2&size=2880x1422" alt="" /> */}
            <button className='first-page__button' onClick={() => { navigate('/menu') }} >Меню</button>
        </div>
    );
}

