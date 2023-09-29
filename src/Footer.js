const Footer = ({ length }) => {
    const year = new Date()
    return (
        <footer>
            <p>
                &copy; {year.getFullYear()} - All Rights Reserved. Created by me and we have {length} {length === 1 ? "item" : "items"}
            </p>
        </footer>
    )
}

export default Footer