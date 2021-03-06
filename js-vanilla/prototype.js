//Прототипное наследование - все объекты имеют скрытое свойство [[Prototype]] которое является ссылкой на другой обьект. Когда происходит обращение к свойству
//то механизм JavaScript ищет это свойтсво в объекте и если не находит ,то ищет в его прототипе или в прототипе прототипа и т.д. до тех пор пока не найдет это свойтсво или пока дойтет до конца цепочки прототипов


//[[Prototype]] - скрытое свойство объкта которое является ссылкой на объект, либо является null


// Чтобы задать это свойтсво можно воспользоаться :
    //1) __proto__ - геттер и сеттер для [[Prototype]] 
    //2)Object.getPrototypeOf -
    //3)Object.setPrototypeOf -


//Пример : 

            let animal = {
                eats: true,
                walk() {
                alert("Animal walk");
                }
            };
            //rabbit прототипно наследует(свойства) от animal 
            let rabbit = {
                jumps: true,
                __proto__: animal
            };
            //longEar прототипно наследует(свойтсва) от rabbit
            let longEar = {
                earLength: 10,
                __proto__: rabbit
            };
            
            // walk взят из цепочки прототипов
            longEar.walk(); // Animal walk
            alert(longEar.jumps); // true (из rabbit)

            //Ограничения :
                //1) Нельзя делать ссылки по кругу
                //2) [[Prototype]] - может быть либо объектом либо же null


//this - this всегда обьект перед точкой, то есть неважно где находятся метод в обьекте или его прототипе, запись будет произведена в обьект перед точкой


//for in - проходит и по собственным и по унаследованным свойствам, все остальные итерирующие методы проходят только по собственным свойствам объекта


//new Func :

//Func.prototype = {constructor : Func} - по умолчанию
// Если Func.prototype содержит объект, то instance получает этот объект в качевстве прототипа 
// Func.prototype = obj - присваиваем функции конструктору prototype obj(все instance созданные от new Fucn, получат в качевстве прототипа obj)


//Встроенные прототипы :
    // Все встроенные объекты следуют одному шаблону:
        // Методы хранятся в прототипах (Array.prototype, Object.prototype, Date.prototype и т.д.).
        // Сами объекты хранят только данные (элементы массивов, свойства объектов, даты).

    // Примитивы также хранят свои методы в прототипах объектов-обёрток: Number.prototype, String.prototype, Boolean.prototype. Только у значений undefined и null нет объектов-обёрток.



// Object.create(proto[, descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto (может быть null), и необязательными дескрипторами свойств.

// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj (то же самое, что и геттер __proto__).

// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto (то же самое, что и сеттер __proto__).