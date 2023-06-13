const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e'
  },
  editA() {
    this.a = 'AAAAAAAAAAAA';
  },
  f: ['a', 1, 'b', 3, 7, 'v', 15]
};

function isObject(subject) {
  return typeof subject === 'object';
}

function isArray(subject) {
  return Array.isArray(subject)
}

function deepCopy(subject) {
  let copySubject;
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);
  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }
  for (key in subject) {
    const keyIsObject = isObject(subject[key])
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else if (subjectIsArray) {
        copySubject.push(subject[key]);
    } else {
        copySubject[key] = subject[key];
    }  
  }
  return copySubject;
}