/*
The subject is a factory to make credit cards. The Factory defines how to create a credit card,
but the actual credit card is created by the CreditCardFactory.
The "createProduct()" is called a Factory Method, and it is responsible for manufacturing an object.
 */
'use strict';

import { Factory } from './framework/factory';
import { Product } from './framework/product';
import { CreditCardFactory } from './credit-card/credit-card-factory';

const factory: Factory = new CreditCardFactory();

const jacksonCard: Product = factory.create(`Jackson`);
jacksonCard.use();

const sophiaCard: Product = factory.create(`Sophia`);
sophiaCard.use();

const oliviaCard: Product = factory.create(`Olivia`);
oliviaCard.use();
