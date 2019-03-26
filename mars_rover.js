var path;
var rover = {
  position: [0, 0],
  direction: 'N'
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function rov(a) {
  for (var i = 0; i < a.length; i++) {
    document.getElementById(rover.position).style.backgroundColor = "green";
    switch (a[i]) {
      case 'R':
        switch (rover.direction) {
          case 'N':
            rover.direction = 'E'
            break;
          case 'E':
            rover.direction = 'S'
            break;
          case 'S':
            rover.direction = 'W'
            break;
          case 'W':
            rover.direction = 'N'
            break;
        }
        break;
      case 'L':
        switch (rover.direction) {
          case 'N':
            rover.direction = 'W'
            break;
          case 'E':
            rover.direction = 'N'
            break;
          case 'S':
            rover.direction = 'E'
            break;
          case 'W':
            rover.direction = 'S'
            break;
        }
        break;
      case 'B':
        switch (rover.direction) {
          case 'N':
            rover.position[1]--
            break;
          case 'E':
            rover.position[0]--
            break;
          case 'S':
            rover.position[1]++
            break;
          case 'W':
            rover.position[0]++
            break;
        }
        if (rover.position[0] < 0) rover.position[0] = 9
        if (rover.position[0] > 9) rover.position[0] = 0
        if (rover.position[1] < 0) rover.position[1] = 9
        if (rover.position[1] > 9) rover.position[1] = 0
        break;
      case 'F':
        switch (rover.direction) {
          case 'N':
            rover.position[1]++
            break;
          case 'E':
            rover.position[0]++
            break;
          case 'S':
            rover.position[1]--
            break;
          case 'W':
            rover.position[0]--
            break;
        }
        if (rover.position[0] < 0) rover.position[0] = 9
        if (rover.position[0] > 9) rover.position[0] = 0
        if (rover.position[1] < 0) rover.position[1] = 9
        if (rover.position[1] > 9) rover.position[1] = 0
        break;
    }
    document.getElementById(rover.position).style.backgroundColor = "green";
  }
  return rover.position;
}

function get() {
  rover.position = [0, 0]
  rover.direction = 'N'

  for (var j = 0; j <= 9; j++) {
    for (var k = 0; k <= 9; k++) {
      document.getElementById([k, j]).style.backgroundColor = "white";
    }
  }

  path = document.getElementById("rm").value;

  var steps = path.split("");
  document.getElementById("camino").innerHTML = steps;

  var ret = rov(steps);
  document.getElementById("res").innerHTML = ret;
}