import React, { useState } from "react";
import styled from "styled-components";

const COURSES = [
  { id: 1, title: "React Js", url: "https://www.reactjs.io" }, 
  { id: 2, title: "AWS", url: "https://www.aws.com" }, 
  { id: 3, title: "Java", url: "https://www.javainfo.co" }, 
  { id: 4, title: "AEM", url: "https://www.aem.com" }, 
  { id: 5, title: "Python", url: "https://www.python.org" }, 
  { id: 6, title: "Machine Learning", url: "https://www.machinelearning.com" } 
];

const AppWrapper = styled.div`
  margin: 10px 15px;
`;

const Courses = ({courses}) => (
  <List>
    {courses.map((course, index) => (
      <ListItem>
        <Course course = {course} />
      </ListItem>
    ))}
  </List>
);

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const ListItem = styled.li`
    padding 10px 0;
    border-bottom: 1px solid #dedede;
`;


const Course = ({course}) => (
  <MyLink href={course.url}>{course.title}</MyLink>
);

const MyLink = styled.a`
  text-decoration: none;
`;

const applyFilter = searchTerm => course => 
  course.title.toLowerCase().includes(searchTerm.toLowerCase());

const Search = ({value, onSearch}) => (
  <SearchWrapper>
    <MyInput value = {value} onChange = {onSearch} type = "text" />
  </SearchWrapper>
);

const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const MyInput = styled.input`
  padding: 2px 10px;
`;

const StyledComponents = () => {
  // searchTerm = aws
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }
    return(
      <AppWrapper>
        <Search vaue = {searchTerm} onSearch = {handleSearch}>
          {/* <h4>Search..</h4> */}
        </Search>
        <Courses courses = {COURSES.filter(applyFilter(searchTerm))} />
      </AppWrapper>
    );
}

export default StyledComponents;