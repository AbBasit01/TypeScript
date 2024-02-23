//Develop a fitness tracker application.
//Define interfaces for activities like running, cycling, swimming, etc.,
//with properties like distance, duration, pace, etc.
//Implement functions to log activities, calculate statistics, set goals, and track progress.

interface Running {
  distance: number;
  duration: number;
  pace: number;
}

interface Cycling {
  distance: number;
  duration: number;
  pace: number;
}

interface Swimming {
  distance: number;
  duration: number;
  pace: number;
}

// interface CustomDate {
//   day: number;
//   month: number;
//   year: number;
// }

interface Everyday {
    date: Date;
  running: Running;
  cycling: Cycling;
  swimming: Swimming;
}

interface FitnessTrack {
    everdayTrack : Everyday[]
}

// function addTrack(
//   TrackForToday: Everyday,
//   dateToday: Date,
//   runningToday: Running,
//   cyclingToday: Cycling,
//   swimmingToday: Swimming
// ) {
//   TrackForToday.date.push(dateToday);
//   TrackForToday.running.push(runningToday);
//   TrackForToday.cycling.push(cyclingToday);
//   TrackForToday.swimming.push(swimmingToday);
// }

function addEverydayToTrack(fitnessRecord:FitnessTrack , daysTrack:Everyday){
    fitnessRecord.everdayTrack.push(daysTrack)
}

var TodaysTrack: Everyday = {
  date: new Date (),
  running: { distance: 0.1, duration: 5, pace: 10 },
  swimming: { distance: 0.1, duration: 5, pace: 10 },
  cycling: { distance: 0.1, duration: 5, pace: 10 },
}

// addTrack(
//   TodaysTrack,
//   new Date('2024-02-12'),
//   { distance: 0.1, duration: 5, pace: 10 },
//   { distance: 0.1, duration: 5, pace: 10 },
//   { distance: 0.1, duration: 5, pace: 10 }
// );

var MyFitnessTrack:FitnessTrack = {
    everdayTrack:[
        {
            date: new Date ('2024-02-14'),
            running: { distance: 0.1, duration: 5, pace: 10 },
            swimming: { distance: 0.1, duration: 5, pace: 10 },
            cycling: { distance: 0.1, duration: 5, pace: 10 },
          }
    ]
}

addEverydayToTrack(MyFitnessTrack , TodaysTrack)

console.log(JSON.stringify(MyFitnessTrack));
