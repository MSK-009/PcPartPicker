import React, { useEffect } from 'react'

const BackToTop = () => {

    useEffect(() => {
        const mybutton = document.getElementById("btn-back-to-top");

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.height = "45px";
                mybutton.style.width = "45px";
            } else {
                mybutton.style.height = "0px";
                mybutton.style.width = "0px";
            }
        }

        window.onscroll = scrollFunction;

        mybutton.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        // Clean up event listeners on component unmount
        return () => {
            window.onscroll = null;
            mybutton.removeEventListener("click", scrollFunction);
        };
    }, []);


    return (
        <button type="button" className="btn btn-success btn-floating btn-lg" id="btn-back-to-top">
            <i className="bi bi-arrow-up"></i>
        </button>
    )
}

export default BackToTop
