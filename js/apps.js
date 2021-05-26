function addTask(){    
    //taskList.innerHTML += '<li>' + task.value + '</li>';

    if(task.value.trim() != ''){
        let listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(task.value));
        taskList.appendChild(listItem);
    
        $(listItem).on('swiperight', function(){
            //$(this).toggleclass('task-done');
            if(listItem.className.indexOf('task-done') == -1)
            {
                listItem.className += ' task-done';
            }
            else{
                listItem.className = listItem.className.replace(' task-done', ' ');
            }
        });

        
        $(listItem).on('swipeleft', function(){
            let deleteDirectly = false;
            if(listItem.className.indexOf('task-done') == -1){
                deleteDirectly = confirm('Tâche non terminée. Voulez vous vraiment supprimer ?');
            }
            else{
                deleteDirectly = true;
            }
            if(deleteDirectly){
                $(listItem).hide('slow',function(){
                    listItem.remove();
                });
            }
                
        });
        task.value = '';
        //task.focus();
        $(taskList).listview('refresh');
    }
}