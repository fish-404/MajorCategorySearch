import { data } from "./data/data2024.js";

document.getElementById('search').addEventListener('click',search);

function search() 
{
    showResult(searchCategory());
}

function searchCategory() 
{
    let category = [];
    let major = document.getElementById("major").value;
    if (major !== '') {
        let searchResult = data.filter(e=>e.includes(major));
        for (const item of searchResult) 
        {
            let dot = item.indexOf('.');
            let common = item.indexOf('：'); // 注意： 这里是中文冒号
            category.push(item.slice(dot+1, common));
        }
    }
    return category;
}

function showResult(category)
{
    if (category.length > 0) {
        notFoundShow(false);
        resultShow(true);
        let ul = document.getElementById("result");
        let lis = document.getElementsByTagName('li');
        if (lis.length > 0) {
            Array.from(lis).forEach(li=> ul.removeChild(li));
        }
        for (const item of category) {
            const li  = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        }
    }
    else {
        notFoundShow(true);
        resultShow(false);
    }
}

function notFoundShow(show) 
{
    if (show) {
        document.getElementById("notFound").style.display = 'block';
    }
    else {
        document.getElementById("notFound").style.display = 'none';
    }
}

function resultShow(show)
{
    if (show) {
        document.getElementById("result").style.display = 'block';
    }
    else {
        document.getElementById("result").style.display = 'none';
    }
}