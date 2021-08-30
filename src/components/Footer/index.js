import React from 'react';
// import { AiFillLinkedin } from 'react-icons/fa';
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (

        <footer class="text-center text-lg-start bg-light text-muted">
            <section class="d-flex justify-content-center  p-4 border-bottom">
                <div>
                    <a href="mailto:Marykatesmith64@gmail.com" class="me-4 text-reset fs-1">
                        <AiFillGoogleCircle />
                    </a>
                    <a href="https://www.linkedin.com/in/marykate-smith-141228141/" class="me-4 text-reset fs-1">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/Marykate94" class="me-4 text-reset fs-1">
                        <AiFillGithub />
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;