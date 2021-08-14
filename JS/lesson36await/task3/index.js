const fetchUsers = async USERID => {
  const response = await fetch(`https://api.github.com/users/${USERID}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Failed to fetch user');
};

const getUsersBlogs = user => {
  try {
    return Promise.all(user.map(el => fetchUsers(el).then(response => response.blog)));
  } catch (err) {
    alert(err.message);
  }
};

getUsersBlogs(['andrii142', 'google', 'github', 'google', 'Sergey2709']).then(linkList => console.log(linkList));
