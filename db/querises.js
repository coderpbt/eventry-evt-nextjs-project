import { userModel } from "@/models/user-models";
import { replacrMongoIdInArray, replacrMongoIdInObject } from "@/utils/data-utils";
import mongoose from "mongoose";

const { eventModel } = require("@/models/event-models");

export async function getAllEvents(query){
  // const allEvents = await eventModel.find().lean();
  // return replacrMongoIdInArray(allEvents);
    let allEvents = [];
    if (query) {
        const regex = new RegExp(query, "i");
        allEvents = await eventModel.find({ name: { $regex: regex } }).lean();
    } else {
        allEvents = await eventModel.find().lean();
    }
    return replacrMongoIdInArray(allEvents);
}


export async function getEventById(eventId){
  const event = await eventModel.findById(eventId).lean();

  return replacrMongoIdInObject(event);
}


export async function createUser(user){
   return await userModel.create(user);
}

export async function fundUserByCredentials(credentials){
   const user =  await userModel.findOne(credentials).lean();

   if(user){
    return replacrMongoIdInObject(user)
   }

   return null;
}

export async function updateInterest(eventId, authId){
  const event = await eventModel.findById(eventId);

  if (event) {
    const foundUsers = event.interested_ids.find(id => id.toString() === authId);

    if (foundUsers) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    }else{
       event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }

    event.save();

  }
}


export async function updateGoing(eventId, authId){
  const event = await eventModel.findById(eventId);
  event.going_ids.push(new mongoose.Types.ObjectId(authId));

  event.save();
}