import React from "react";

function Profile(){
    return(
        <div className='content'>
            <div>
                <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt=""/>
            </div>
            <div>ava+desc</div>
            <div>
                My posts
                <div>New post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;