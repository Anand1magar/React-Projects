class Bicycle {
  int cadence;
  int _speed = 0;
  int get speed => _speed;
  int gear;

  Bicycle(this.cadence, this.gear);

  void applyBrake(int decrement) {
    _speed -= decrement;
    print("applying break");
  }

  void speedUp() {
    _speed++;
    print(" i am increment by $_speed");
  }

  @override
  String toString() => 'Bicycle: $_speed mph';
}

void main() {
  var bike = Bicycle(2, 1);
  print(bike);
  bike.speedUp();
  if (bike._speed >= 10) {
    bike.speedUp();
  } else {
    bike.applyBrake(bike._speed);
  }
}
