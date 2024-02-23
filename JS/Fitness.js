"use strict";
//Develop a fitness tracker application.
//Define interfaces for activities like running, cycling, swimming, etc.,
//with properties like distance, duration, pace, etc.
//Implement functions to log activities, calculate statistics, set goals, and track progress.
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
function addEverydayToTrack(fitnessRecord, daysTrack) {
    fitnessRecord.everdayTrack.push(daysTrack);
}
var TodaysTrack = {
    date: new Date(),
    running: { distance: 0.1, duration: 5, pace: 10 },
    swimming: { distance: 0.1, duration: 5, pace: 10 },
    cycling: { distance: 0.1, duration: 5, pace: 10 },
};
// addTrack(
//   TodaysTrack,
//   new Date('2024-02-12'),
//   { distance: 0.1, duration: 5, pace: 10 },
//   { distance: 0.1, duration: 5, pace: 10 },
//   { distance: 0.1, duration: 5, pace: 10 }
// );
var MyFitnessTrack = {
    everdayTrack: [
        {
            date: new Date('2024-02-14'),
            running: { distance: 0.1, duration: 5, pace: 10 },
            swimming: { distance: 0.1, duration: 5, pace: 10 },
            cycling: { distance: 0.1, duration: 5, pace: 10 },
        }
    ]
};
addEverydayToTrack(MyFitnessTrack, TodaysTrack);
console.log(JSON.stringify(MyFitnessTrack));
