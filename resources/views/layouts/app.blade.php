@extends('layouts.base')

@section('stylesheets')

    <link rel="stylesheet" href="{{ url('css/index.css') }}">

@endsection

@section('header')
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo"><img src="{{ url('img/logowhite.png') }}"></a>

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <!-- Dropdown1 Trigger -->
                    <li>
                        <a class="dropdown-button" href="#!" data-activates="dropdown1">
                            <img class="circle user-image" src="{{ url('img/user.jpg') }}">
                            <div style="clear:both"></div>
                            <span class="user-name">User name</span>
                            <i class="material-icons right">arrow_drop_down</i></a>
                    </li>
                </ul>

                <!-- sliding responsive navbar -->

                <ul id="slide-out" class="side-nav">
                    <li>
                        <div class="userView">
                            <div class="background">
                                <img src="css/bg.jpg">
                            </div>
                            <a href="#!user"><img class="circle" src="{{ url('img/user.jpg') }}"></a>
                            <a href="#!name"><span class="slide-text name">user name</span></a>
                            <a href="#!email"><span class="slide-text email">email@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#!">link 1</a></li>
                    <li><a href="#!">link 2</a></li>
                    <li>
                        <div class="divider"></div>
                    </li>
                    <li><a class="subheader">Drop down</a></li>
                    <li><a href="#!">link 1</a></li>
                    <li><a href="#!">link 2</a></li>
                    <li>
                        <div class="divider"></div>
                    </li>
                    <li><a href="#!"><i class="material-icons">lock_open</i>Log out</a></li>
                </ul>
                <a href="#" data-activates="slide-out" class="button-collapse "><i class="material-icons">menu</i></a>
            </div>
        </nav>
    </div>
@endsection

