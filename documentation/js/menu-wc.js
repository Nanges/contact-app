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
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CategoryModule-7fd2d869fbce5cc90440b71a308778676afd4b8f8db7b0b21a3e9e87d27609423c10f4262403bc9059500d5ce20b0c94465e723a08fa438c270c1fa7b64327f7"' : 'data-target="#xs-components-links-module-CategoryModule-7fd2d869fbce5cc90440b71a308778676afd4b8f8db7b0b21a3e9e87d27609423c10f4262403bc9059500d5ce20b0c94465e723a08fa438c270c1fa7b64327f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoryModule-7fd2d869fbce5cc90440b71a308778676afd4b8f8db7b0b21a3e9e87d27609423c10f4262403bc9059500d5ce20b0c94465e723a08fa438c270c1fa7b64327f7"' :
                                            'id="xs-components-links-module-CategoryModule-7fd2d869fbce5cc90440b71a308778676afd4b8f8db7b0b21a3e9e87d27609423c10f4262403bc9059500d5ce20b0c94465e723a08fa438c270c1fa7b64327f7"' }>
                                            <li class="link">
                                                <a href="components/CategoryFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryRoutingModule.html" data-type="entity-link" >CategoryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-5da8e8a695caab99f8a5b29d369af1dc47248ae48d1d782256fec055ba52d1ad03fe237b8226f0a7e20689d82667f6ccc2f639cc90fd086663d329ba23deb774"' : 'data-target="#xs-components-links-module-ContactModule-5da8e8a695caab99f8a5b29d369af1dc47248ae48d1d782256fec055ba52d1ad03fe237b8226f0a7e20689d82667f6ccc2f639cc90fd086663d329ba23deb774"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-5da8e8a695caab99f8a5b29d369af1dc47248ae48d1d782256fec055ba52d1ad03fe237b8226f0a7e20689d82667f6ccc2f639cc90fd086663d329ba23deb774"' :
                                            'id="xs-components-links-module-ContactModule-5da8e8a695caab99f8a5b29d369af1dc47248ae48d1d782256fec055ba52d1ad03fe237b8226f0a7e20689d82667f6ccc2f639cc90fd086663d329ba23deb774"' }>
                                            <li class="link">
                                                <a href="components/ContactFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactRoutingModule.html" data-type="entity-link" >ContactRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-81cec57648631fb5f4c5b4fa7056065da0937c6e5c6191662037e6100a06fa36f0401895b39c6bb58c5a3704474b6e7cedbd46b763394cdf5a33239e272f2ab6"' : 'data-target="#xs-components-links-module-LayoutModule-81cec57648631fb5f4c5b4fa7056065da0937c6e5c6191662037e6100a06fa36f0401895b39c6bb58c5a3704474b6e7cedbd46b763394cdf5a33239e272f2ab6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-81cec57648631fb5f4c5b4fa7056065da0937c6e5c6191662037e6100a06fa36f0401895b39c6bb58c5a3704474b6e7cedbd46b763394cdf5a33239e272f2ab6"' :
                                            'id="xs-components-links-module-LayoutModule-81cec57648631fb5f4c5b4fa7056065da0937c6e5c6191662037e6100a06fa36f0401895b39c6bb58c5a3704474b6e7cedbd46b763394cdf5a33239e272f2ab6"' }>
                                            <li class="link">
                                                <a href="components/AddButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditionLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditionLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListingLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListingLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemoveButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LayoutModule-81cec57648631fb5f4c5b4fa7056065da0937c6e5c6191662037e6100a06fa36f0401895b39c6bb58c5a3704474b6e7cedbd46b763394cdf5a33239e272f2ab6"' : 'data-target="#xs-injectables-links-module-LayoutModule-81cec57648631fb5f4c5b4fa7056065da0937c6e5c6191662037e6100a06fa36f0401895b39c6bb58c5a3704474b6e7cedbd46b763394cdf5a33239e272f2ab6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LayoutModule-81cec57648631fb5f4c5b4fa7056065da0937c6e5c6191662037e6100a06fa36f0401895b39c6bb58c5a3704474b6e7cedbd46b763394cdf5a33239e272f2ab6"' :
                                        'id="xs-injectables-links-module-LayoutModule-81cec57648631fb5f4c5b4fa7056065da0937c6e5c6191662037e6100a06fa36f0401895b39c6bb58c5a3704474b6e7cedbd46b763394cdf5a33239e272f2ab6"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmService</a>
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