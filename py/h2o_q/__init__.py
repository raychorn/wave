"""
Python package `h2o_q` provides the Python driver for H2O Q.

H2O Q is a lightweight software stack for programming interactive web applications
entirely in Python (no HTML/Javascript/CSS) required.

It is designed to make it fast, fun and easy to build low-latency, realtime,
collaborative, web-based applications. It ships batteries-included with
a suite of form and data visualization components for rapidly prototyping
analytical and decision-support applications.

Q's components work in conjunction with the Q relay server that facilitates
realtime state synchronization between Python and web browsers.


.. include:: ../docs/index.md
"""
from .core import Site, site, Page, data, pack, configure, Expando, expando_to_dict, clone_expando, copy_expando
from .server import listen, Q
from .db import TeleDBError, TeleDB
from .types import *