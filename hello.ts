type THoge = {
  fuga: string;
  piyo: number;
};

const map = new Map<string, THoge>();
map.set("1", { fuga: "fuga", piyo: 1 });
map.set("2", { fuga: "fuga", piyo: 2 });
console.log(map);
// Map { "1" => { fuga: "fuga", piyo: 1 }, "2" => { fuga: "fuga", piyo: 2 } }
console.log(JSON.stringify(map));
// {}
console.log(JSON.stringify(map.entries()));
// {}

const object = Object.fromEntries(map);
console.log(JSON.stringify(object));
// {"1":{"fuga":"fuga","piyo":1},"2":{"fuga":"fuga","piyo":2}}
const object2 = Object.fromEntries(map.entries());
console.log(JSON.stringify(object2));
// {"1":{"fuga":"fuga","piyo":1},"2":{"fuga":"fuga","piyo":2}}
console.log(JSON.stringify([...map]));
// [["1",{"fuga":"fuga","piyo":1}],["2",{"fuga":"fuga","piyo":2}]]
console.log(JSON.stringify([...map.entries()]));
// [["1",{"fuga":"fuga","piyo":1}],["2",{"fuga":"fuga","piyo":2}]]

const keys = map.keys();
const values = map.values();
const mapEntries = map.entries();
console.log([...keys], [...values], [...mapEntries]);
// [ "1", "2" ] [ { fuga: "fuga", piyo: 1 }, { fuga: "fuga", piyo: 2 } ] [ [ "1", { fuga: "fuga", piyo: 1 } ], [ "2", { fuga: "fuga", piyo: 2 } ] ]

const entries = Object.entries(object);
console.log(entries);
// [ [ "1", { fuga: "fuga", piyo: 1 } ], [ "2", { fuga: "fuga", piyo: 2 } ] ]
const map2 = new Map(entries);
console.log(map2);
// Map { "1" => { fuga: "fuga", piyo: 1 }, "2" => { fuga: "fuga", piyo: 2 } }
