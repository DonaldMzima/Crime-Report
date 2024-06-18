import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, ScrollView } from "react-native";

const ReportForm = () => {
  const [reportDateTime, setReportDateTime] = useState("");
  const [incidentDateTime, setIncidentDateTime] = useState("");
  const [position, setPosition] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [incidentLocation, setIncidentLocation] = useState("");
  const [natureOfIncident, setNatureOfIncident] = useState("");
  const [incidentDetails, setIncidentDetails] = useState("");
  const [suspectCharges, setSuspectCharges] = useState("");
  const [arrested, setArrested] = useState("");
  const [suspectFirstName, setSuspectFirstName] = useState("");
  const [suspectLastName, setSuspectLastName] = useState("");
  const [suspectComments, setSuspectComments] = useState("");

  const handleSubmit = () => {
    // Handle form submission
    // You can perform validation and submit the data to your backend or storage
    // For now, just log the form data
    console.log({
      reportDateTime,
      incidentDateTime,
      position,
      firstName,
      middleName,
      lastName,
      incidentLocation,
      natureOfIncident,
      incidentDetails,
      suspectCharges,
      arrested,
      suspectFirstName,
      suspectLastName,
      suspectComments,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Report date and time"
          value={reportDateTime}
          onChangeText={setReportDateTime}
        />
        <TextInput
          style={styles.input}
          placeholder="Date and time when incident occurred"
          value={incidentDateTime}
          onChangeText={setIncidentDateTime}
        />
        <TextInput
          style={styles.input}
          placeholder="Position"
          value={position}
          onChangeText={setPosition}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Middle Name"
          value={middleName}
          onChangeText={setMiddleName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Incident Location"
          value={incidentLocation}
          onChangeText={setIncidentLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Nature of Incident"
          value={natureOfIncident}
          onChangeText={setNatureOfIncident}
        />
        <TextInput
          style={styles.input}
          placeholder="Incident Details"
          value={incidentDetails}
          onChangeText={setIncidentDetails}
        />
        <TextInput
          style={styles.input}
          placeholder="Suspect Charges"
          value={suspectCharges}
          onChangeText={setSuspectCharges}
        />
        <TextInput
          style={styles.input}
          placeholder="Arrested?"
          value={arrested}
          onChangeText={setArrested}
        />
        <TextInput
          style={styles.input}
          placeholder="Suspect First Name"
          value={suspectFirstName}
          onChangeText={setSuspectFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Suspect Last Name"
          value={suspectLastName}
          onChangeText={setSuspectLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Further Comments"
          value={suspectComments}
          onChangeText={setSuspectComments}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default ReportForm;
