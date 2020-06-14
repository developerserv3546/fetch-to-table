export const getSortedBy = (key, users, asc) => {

    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
        switch (key) {
            case '#':
                return a.id < b.id ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'name':
                return a.name < b.name ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'username':
                return a.username < b.username ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'email':
                return a.email < b.email ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'street':
                return a.address.street < b.address.street ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'suite':
                return a.address.suite < b.address.suite ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'city':
                return a.address.city < b.address.city ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'zipcode':
                return a.address.zipcode < b.address.zipcode ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'phone':
                return a.phone < b.phone ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'website':
                return a.website < b.website ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'name ':
                return a.company.name < b.company.name ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'catch phrase':
                return a.company.catchPhrase < b.company.catchPhrase ? (asc ? -1 : 1) : (asc ? 1 : -1);
            case 'bs':
                return a.company.bs < b.company.bs ? (asc ? -1 : 1) : (asc ? 1 : -1);
            default:
                return 0;
        }
    });
    console.log(sortedUsers)
    return sortedUsers;
};