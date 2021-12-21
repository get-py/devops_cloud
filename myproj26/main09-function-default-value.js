const get_default_value = () => 10; {
    console.log("get_default_value() 함수 호출");
}
function hello(name, age = get_default_value()) {
    console.log(`안녕. 나는 ${name}. ${age}살이지`);
}

hello("Tom");
hello("Steve", 14);