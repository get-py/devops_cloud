function TopNav({ changePageName }) {
    return (
        <ul>
            <li>
                <a onClick={() => changePageName("1")}>              About
                </a>
            </li>
            <li>
                <a onClick={() => changePageName('2')}>
                </a>
            </li>
            <li>
                <a onClick={() => changePageName('3')}>
                </a>
            </li>
        </ul>
    );
}

export default TopNav;