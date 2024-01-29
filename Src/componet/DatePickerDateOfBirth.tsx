import moment from "moment";
import React from "react";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import Modal from "react-native-modal";
// import DatePicker from "react-native-styled-datepicker";
// import DatePicker from "react-native-styled-datepicker";

import { Calendar } from "react-native-calendars";
import { useDate } from "./useDate";
//import Icons from "../icons/Icons";
type DatePikerProps = {
  isVisible?: boolean;
  onDateSelect: (arg: string) => void;
  onCancle: () => void;
  onClose?: () => void;
  minDate?: Date;
  maxDate?: Date;
};

const monthNames = [
  { id: 0, name: "Jan" },
  { id: 1, name: "Feb" },
  { id: 2, name: "Mar" },
  { id: 3, name: "Apr" },
  { id: 4, name: "May" },
  { id: 5, name: "Jun" },
  { id: 6, name: "Jul" },
  { id: 7, name: "Aug" },
  { id: 8, name: "Sep" },
  { id: 9, name: "Oct" },
  { id: 10, name: "Nov" },
  { id: 11, name: "Dec" },
];


function DatePikerModal(props: DatePikerProps) {
  const { isVisible, onDateSelect, onCancle, onClose, minDate, maxDate } =
    props;
  const [date, setData] = useState<string>("");
  const [showYear, setShowYear] = useState<boolean>(false);
  const [showMonth, setShowMonth] = useState<boolean>(false);

  const { listOfYears, currentYear, handlePrevClick, handleNextClick } =
    useDate();
  const [selected, setSelected] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );

  const [selectedDate, setSelectedDate] = useState("");

  const onDonePress = () => {
    onDateSelect(moment(selectedDate).format("MM-DD-YYYY"));
    if (onClose) {
      onClose();
    }
  };

  /*   const currentTimestamp = new Date().getTime(); */

  const handleDateConfirm = (date: moment.MomentInput) => {
    /*   console.warn("A date has been picked: ", date); */
    // const dt = new Date(date);
    // const x = dt.toISOString().split("T");
    // const x1 = x[0].split("-");  */
    /* setData(x1[1] + "/" + x1[2] + "/" + x1[0]); */
    // setData(x1[1] + "-" + x1[2] + "-" + x1[0]);
    setData(moment(date).format("MM-DD-YYYY"));
  };

  // console.log("selected",selected);

  return (
    <Modal isVisible={isVisible} style={styles.view}>
      <View style={styles.btnView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={onCancle} style={styles.cancelBtn}>
            <Text style={styles.canceltext}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onDonePress}
            style={styles.doneBtn}
            disabled={selectedDate == ""}
          >
            <Text style={styles.text}>Select</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 400,
            marginTop: 20,
          }}
        >
          {/* <DatePicker
            onChange={handleDateConfirm}
            selectedDateColor={"black"}
            calendarHeaderTextStyles={{ color: "#003087" }}
            calendarHeaderWrapperStyles={{ color: "white" }}
            weekendDateColor={"black"}
            weekDateColor={"black"}
            selectedDateStyles={{
              backgroundColor: "lightgray",
              borderColor: "lightgray",
              borderRadius: 52,
            }}
            minDate={minDate}
            maxDate={maxDate}
          /> */}

          {showYear ? (
            <FlatList
              data={listOfYears}
              numColumns={4}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FFF",
                      marginStart: 10,
                      padding: 10,
                      marginTop: 10,
                      borderRadius: 10,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                      width: 60,
                      alignItems: "center",
                      marginEnd: 5,
                    }}
                    onPress={() => {
                      const date = moment(new Date(selected))
                        .set("year", item)
                        .format("YYYY-MM-DD");

                      setSelected(
                        moment(new Date(selected))
                          .set("year", item)
                          .format("YYYY-MM-DD")
                      );
                      setShowYear(false);
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.toString()}
              style={{ alignSelf: "center" }}
              ListHeaderComponent={() => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      alignSelf: "center",
                      marginBottom: 30,
                    }}
                  >
                    <TouchableOpacity
                      onPress={handlePrevClick}
                      style={{ marginEnd: 10 }}
                    >

                      <Image

                        source={require('../../assets/image/calendarmonth.png')}
                        style={{ width: 30, height: 30 }}
                      />
                      {/*     //  <Icons iconType="Entypo" name="chevron-left" size={24} /> */}
                    </TouchableOpacity>
                    <Text>{currentYear}</Text>
                    <Text>-{currentYear + 19}</Text>
                    <TouchableOpacity
                      onPress={handleNextClick}
                      style={{ marginStart: 10 }}
                    >
                      <Image

                        source={require('../../assets/image/calendarmonth.png')}
                        style={{ width: 30, height: 30 }}
                      />
                      {/*        //    <Icons iconType="Entypo" name="chevron-right" size={24} /> */}
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          ) : showMonth ? (
            <FlatList
              data={monthNames}
              numColumns={3}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FFF",
                      marginStart: 10,
                      padding: 10,
                      marginTop: 10,
                      borderRadius: 10,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                      width: 60,
                      alignItems: "center",
                      marginEnd: 5,
                    }}
                    onPress={() => {
                      const date = moment(new Date(selected))
                        .set("month", item.id)
                        .format("YYYY-MM-DD");
                      setSelected(date);
                      setShowMonth(false);
                    }}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.name.toString()}
              style={{ alignSelf: "center", marginTop: 20 }}

            />
          ) : (
            <Calendar
              onDayPress={(day) => {
                setSelectedDate(day.dateString);
              }}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  disableTouchEvent: true,
                },
              }}
              renderHeader={(date) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity onPress={() => setShowMonth(true)}>
                      <Text>{moment(selected).format("MMMM")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowYear(true)}>
                      <Text> {moment(selected).format("YYYY")}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              onMonthChange={(month) => {
                setSelected(month.dateString);
              }}
              current={selected}
              minDate={
                minDate ? moment(minDate).format("YYYY-MM-DD") : undefined
              }
              maxDate={
                maxDate ? moment(maxDate).format("YYYY-MM-DD") : undefined
              }
              theme={{
                backgroundColor: "#ffffff",
                calendarBackground: "#ffffff",
                textSectionTitleColor: "#000",
                selectedDayBackgroundColor: "#003087",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#E35205",
                dayTextColor: "#2d4150",
                textDisabledColor: "#7D95C1",
                arrowColor: "#003087",
                arrowStyle: { marginHorizontal: 40 },
              }}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}

export default DatePikerModal;

const styles = StyleSheet.create({
  view: {
    justifyContent: "flex-end",
    margin: 0,
  },
  btnView: {
    backgroundColor: "#FFF",
    paddingBottom: 20,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  doneBtn: {
    backgroundColor: "#003087",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 10,
  },
  text: {
    color: "#FFF",
    fontWeight: "600",
  },
  cancelBtn: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
    // marginHorizontal: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  canceltext: {
    color: "#003087",
    fontWeight: "600",
  },
});