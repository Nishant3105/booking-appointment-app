const form = document.getElementById('form')
form.addEventListener('submit', saveUser)

async function saveUser(event) {
    try {
        event.preventDefault()
        const name = document.getElementById('name').value
        const phone = document.getElementById('pno').value
        const email = document.getElementById('email').value

        let my_obj = {
            name,
            phone,
            email
        }
        // console.log(my_obj)

        const res = await axios.post('http://localhost:3007/postUser', my_obj)
        console.log(res)
        showUserOnScreen(res.data.newUserDetails)
    }

    catch (err) {
        console.log(err)
    }
}

function showUserOnScreen(data) {
    try {
        const item = document.getElementById('list')
        const bodyinnerHTML = `<li id="${data.id}">${data.name} - ${data.email} - ${data.phonenumber}
                             <button onclick="deleteUser('${data.id}')">Delete</button>
                             <button onclick="editUser('${data.id}')">Edit</button>
                             </li>`
        item.innerHTML = item.innerHTML + bodyinnerHTML
    }
    catch (err) {
        console.log(err)
    }
}

async function deleteUser(id) {
    try {
        await axios.delete(`http://localhost:3007/deleteUser/${id}`)
        removeFromScreen(id)
    }
    catch (err) {
        console.log(err)
    }

}

function removeFromScreen(id) {
    try {
        console.log('remove')
        const items = document.getElementById('list')
        const itemToBeDeleted = document.getElementById(id)
        console.log(itemToBeDeleted)
        if (itemToBeDeleted) {
            items.removeChild(itemToBeDeleted)
        }
    }
    catch (err) {
        console.log(err)
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const res = await axios.get('http://localhost:3007/getUsers')
        console.log(res.data.userDetails)
        for (let i = 0; i < res.data.userDetails.length; i++) {
            showUserOnScreen(res.data.userDetails[i])
        }
    }
    catch (err) {
        console.log(err)
    }
})