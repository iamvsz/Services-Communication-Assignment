export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to active: ' + this.inactiveToActiveCounter);
  }

  countUsers(userType: string, usersArray: string[]) {
    console.log('number of ' + userType + ' users ' + usersArray.length);
  }
}
