const form=document.querySelector('#book-form');
form.addEventListener("submit",addBook);

function addBook(e){
    e.preventDefault();
    let title=document.querySelector('#title');
    let author=document.querySelector('#author');
    let isbn=document.querySelector('#isbn');
    let tbody=document.querySelector('#book-list');
    let row=document.createElement('tr');
    row.innerHTML=`
    <td>${title.value}</td>
    <td>${author.value}</td>
    <td>${isbn.value}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    tbody.append(row);
}
document.querySelector('#book-list').addEventListener('click',(e)=>{
    let parent=e.target.parentElement.parentElement;
    parent.remove();
})