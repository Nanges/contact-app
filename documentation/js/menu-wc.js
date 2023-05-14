'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">contact-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c4f2fd60f9d5394aae9aafd46fe8e8e4219028249b8f0bd8b49413579c193735fad330885bb4481df7c30e2b3e3e605a394994e906fa01aecd2dc0d4778f2b49"' : 'data-target="#xs-components-links-module-AppModule-c4f2fd60f9d5394aae9aafd46fe8e8e4219028249b8f0bd8b49413579c193735fad330885bb4481df7c30e2b3e3e605a394994e906fa01aecd2dc0d4778f2b49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c4f2fd60f9d5394aae9aafd46fe8e8e4219028249b8f0bd8b49413579c193735fad330885bb4481df7c30e2b3e3e605a394994e906fa01aecd2dc0d4778f2b49"' :
                                            'id="xs-components-links-module-AppModule-c4f2fd60f9d5394aae9aafd46fe8e8e4219028249b8f0bd8b49413579c193735fad330885bb4481df7c30e2b3e3e605a394994e906fa01aecd2dc0d4778f2b49"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BaseLayoutModule.html" data-type="entity-link" >BaseLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BaseLayoutModule-560375ed9a9141a3124ad26ee128f3e969c19d3c9c1a41a8cc884b6053f4644c14154f901679d7560b1d7bf7d91145b34d37a4b3764604e0ce1e8154456c2e80"' : 'data-target="#xs-components-links-module-BaseLayoutModule-560375ed9a9141a3124ad26ee128f3e969c19d3c9c1a41a8cc884b6053f4644c14154f901679d7560b1d7bf7d91145b34d37a4b3764604e0ce1e8154456c2e80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseLayoutModule-560375ed9a9141a3124ad26ee128f3e969c19d3c9c1a41a8cc884b6053f4644c14154f901679d7560b1d7bf7d91145b34d37a4b3764604e0ce1e8154456c2e80"' :
                                            'id="xs-components-links-module-BaseLayoutModule-560375ed9a9141a3124ad26ee128f3e969c19d3c9c1a41a8cc884b6053f4644c14154f901679d7560b1d7bf7d91145b34d37a4b3764604e0ce1e8154456c2e80"' }>
                                            <li class="link">
                                                <a href="components/LayoutHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CategoryModule-84767513e1cab2af1d82e261772d1b2d569c3415668a41171d6b3006d2b2a0ee91203f800f39c18536e7cae3488205d32474a9343c0f1c8bc24192df73e3f300"' : 'data-target="#xs-components-links-module-CategoryModule-84767513e1cab2af1d82e261772d1b2d569c3415668a41171d6b3006d2b2a0ee91203f800f39c18536e7cae3488205d32474a9343c0f1c8bc24192df73e3f300"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoryModule-84767513e1cab2af1d82e261772d1b2d569c3415668a41171d6b3006d2b2a0ee91203f800f39c18536e7cae3488205d32474a9343c0f1c8bc24192df73e3f300"' :
                                            'id="xs-components-links-module-CategoryModule-84767513e1cab2af1d82e261772d1b2d569c3415668a41171d6b3006d2b2a0ee91203f800f39c18536e7cae3488205d32474a9343c0f1c8bc24192df73e3f300"' }>
                                            <li class="link">
                                                <a href="components/AddCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryFieldsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryFieldsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditCategoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryRoutingModule.html" data-type="entity-link" >CategoryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfirmModule.html" data-type="entity-link" >ConfirmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfirmModule-390109861b099fea594fe1218d6abd56ae526f06d609a59c3a8e1a24b29f2db396a8447742ee5b1b259843f97cf9537a20365347f4b3f6893842184f22db03c7"' : 'data-target="#xs-components-links-module-ConfirmModule-390109861b099fea594fe1218d6abd56ae526f06d609a59c3a8e1a24b29f2db396a8447742ee5b1b259843f97cf9537a20365347f4b3f6893842184f22db03c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfirmModule-390109861b099fea594fe1218d6abd56ae526f06d609a59c3a8e1a24b29f2db396a8447742ee5b1b259843f97cf9537a20365347f4b3f6893842184f22db03c7"' :
                                            'id="xs-components-links-module-ConfirmModule-390109861b099fea594fe1218d6abd56ae526f06d609a59c3a8e1a24b29f2db396a8447742ee5b1b259843f97cf9537a20365347f4b3f6893842184f22db03c7"' }>
                                            <li class="link">
                                                <a href="components/ConfirmModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConfirmModule-390109861b099fea594fe1218d6abd56ae526f06d609a59c3a8e1a24b29f2db396a8447742ee5b1b259843f97cf9537a20365347f4b3f6893842184f22db03c7"' : 'data-target="#xs-injectables-links-module-ConfirmModule-390109861b099fea594fe1218d6abd56ae526f06d609a59c3a8e1a24b29f2db396a8447742ee5b1b259843f97cf9537a20365347f4b3f6893842184f22db03c7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfirmModule-390109861b099fea594fe1218d6abd56ae526f06d609a59c3a8e1a24b29f2db396a8447742ee5b1b259843f97cf9537a20365347f4b3f6893842184f22db03c7"' :
                                        'id="xs-injectables-links-module-ConfirmModule-390109861b099fea594fe1218d6abd56ae526f06d609a59c3a8e1a24b29f2db396a8447742ee5b1b259843f97cf9537a20365347f4b3f6893842184f22db03c7"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-bb0d914bb3df7d933d71b4cbff4cdfd9e5cb85dd82d26f2445e06493c5a348ecee6e1313a4334debe1719137b9e9d7b7350f02cdfc9bb99ad87a899f0b23e850"' : 'data-target="#xs-components-links-module-ContactModule-bb0d914bb3df7d933d71b4cbff4cdfd9e5cb85dd82d26f2445e06493c5a348ecee6e1313a4334debe1719137b9e9d7b7350f02cdfc9bb99ad87a899f0b23e850"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-bb0d914bb3df7d933d71b4cbff4cdfd9e5cb85dd82d26f2445e06493c5a348ecee6e1313a4334debe1719137b9e9d7b7350f02cdfc9bb99ad87a899f0b23e850"' :
                                            'id="xs-components-links-module-ContactModule-bb0d914bb3df7d933d71b4cbff4cdfd9e5cb85dd82d26f2445e06493c5a348ecee6e1313a4334debe1719137b9e9d7b7350f02cdfc9bb99ad87a899f0b23e850"' }>
                                            <li class="link">
                                                <a href="components/AddContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactFieldsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactFieldsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditContactComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactRoutingModule.html" data-type="entity-link" >ContactRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EditionLayoutModule.html" data-type="entity-link" >EditionLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditionLayoutModule-6571b9caeef701707bcdd3eafd29fdacd9f01bdab136d421e31a3b9d6505fdda7a1c4a277c6d2ecc4c52951e6fb8f86f5f8dcf8c882a522bdc631fddf899bccb"' : 'data-target="#xs-components-links-module-EditionLayoutModule-6571b9caeef701707bcdd3eafd29fdacd9f01bdab136d421e31a3b9d6505fdda7a1c4a277c6d2ecc4c52951e6fb8f86f5f8dcf8c882a522bdc631fddf899bccb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditionLayoutModule-6571b9caeef701707bcdd3eafd29fdacd9f01bdab136d421e31a3b9d6505fdda7a1c4a277c6d2ecc4c52951e6fb8f86f5f8dcf8c882a522bdc631fddf899bccb"' :
                                            'id="xs-components-links-module-EditionLayoutModule-6571b9caeef701707bcdd3eafd29fdacd9f01bdab136d421e31a3b9d6505fdda7a1c4a277c6d2ecc4c52951e6fb8f86f5f8dcf8c882a522bdc631fddf899bccb"' }>
                                            <li class="link">
                                                <a href="components/EditionLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditionLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemoveButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-EditionLayoutModule-6571b9caeef701707bcdd3eafd29fdacd9f01bdab136d421e31a3b9d6505fdda7a1c4a277c6d2ecc4c52951e6fb8f86f5f8dcf8c882a522bdc631fddf899bccb"' : 'data-target="#xs-directives-links-module-EditionLayoutModule-6571b9caeef701707bcdd3eafd29fdacd9f01bdab136d421e31a3b9d6505fdda7a1c4a277c6d2ecc4c52951e6fb8f86f5f8dcf8c882a522bdc631fddf899bccb"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-EditionLayoutModule-6571b9caeef701707bcdd3eafd29fdacd9f01bdab136d421e31a3b9d6505fdda7a1c4a277c6d2ecc4c52951e6fb8f86f5f8dcf8c882a522bdc631fddf899bccb"' :
                                        'id="xs-directives-links-module-EditionLayoutModule-6571b9caeef701707bcdd3eafd29fdacd9f01bdab136d421e31a3b9d6505fdda7a1c4a277c6d2ecc4c52951e6fb8f86f5f8dcf8c882a522bdc631fddf899bccb"' }>
                                        <li class="link">
                                            <a href="directives/RemoveHandlerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveHandlerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SaveHandlerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaveHandlerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UseCancellationDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UseCancellationDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListingLayoutModule.html" data-type="entity-link" >ListingLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListingLayoutModule-130c07427a24ad5fca7817d805be72c75489749b2536f28787c9efbeb1a415689389eff889a6a8c86dcbc00a12291fcc5bd7345911911ce617b245045161c90c"' : 'data-target="#xs-components-links-module-ListingLayoutModule-130c07427a24ad5fca7817d805be72c75489749b2536f28787c9efbeb1a415689389eff889a6a8c86dcbc00a12291fcc5bd7345911911ce617b245045161c90c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListingLayoutModule-130c07427a24ad5fca7817d805be72c75489749b2536f28787c9efbeb1a415689389eff889a6a8c86dcbc00a12291fcc5bd7345911911ce617b245045161c90c"' :
                                            'id="xs-components-links-module-ListingLayoutModule-130c07427a24ad5fca7817d805be72c75489749b2536f28787c9efbeb1a415689389eff889a6a8c86dcbc00a12291fcc5bd7345911911ce617b245045161c90c"' }>
                                            <li class="link">
                                                <a href="components/AddButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListingLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListingLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfirmService.html" data-type="entity-link" >ConfirmService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CategoryResolver.html" data-type="entity-link" >CategoryResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/ContactResolver.html" data-type="entity-link" >ContactResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ConfirmModalData.html" data-type="entity-link" >ConfirmModalData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});