import React from 'react'
import './TeamCard2.css'

const TeamCard2 = ({img,title,position}) => {
  return (
    <div class="our-team">
      <div class="picture">
        <img src="https://picsum.photos/130/130?image=836" alt="h4b" />
      </div>
      <div class="team-content">
        <h3 class="name">Mary Huntley</h3>
        <h4 class="title">Web Developer</h4>
      </div>
      <ul class="social">
        <li>
          <a href="" class="fa fa-facebook" aria-hidden="true"></a>
        </li>
        <li>
          <a href="" class="fa fa-twitter" aria-hidden="true"></a>
        </li>
        <li>
          <a href="" class="fa fa-google-plus" aria-hidden="true"></a>
        </li>
        <li>
          <a href="" class="fa fa-linkedin" aria-hidden="true"></a>
        </li>
      </ul>
    </div>
  );
}

export default TeamCard2