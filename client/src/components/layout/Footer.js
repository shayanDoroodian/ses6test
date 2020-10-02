import React from 'react'

export default function Footer() {
    return (
        <footer>
            <ul className="footerContainer">
                <li>خدمات پس از فروش </li>
                <li>اخبار و تازه ها</li>
                <li>آلبوم تصاویر</li>
                <li>همکاری</li>
                <li>رضایت سنجی</li>
                <li>رضایت سنجی</li>
                <li>ارتباط با ما</li>
            </ul>
            <p>Copyright &copy; {new Date().getFullYear()} Nik Pouyan</p>
        </footer>
    )
}

